export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      producto_imagenes: {
        Row: {
          created_at: string | null
          handle: string | null
          id: string
          "Image Position": number
          "Image Src": string | null
        }
        Insert: {
          created_at?: string | null
          handle?: string | null
          id?: string
          "Image Position": number
          "Image Src"?: string | null
        }
        Update: {
          created_at?: string | null
          handle?: string | null
          id?: string
          "Image Position"?: number
          "Image Src"?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "producto_imagenes_handle_fkey"
            columns: ["handle"]
            isOneToOne: false
            referencedRelation: "productos"
            referencedColumns: ["handle"]
          },
        ]
      }
      productos: {
        Row: {
          "Body (HTML)": string | null
          "Compare At Price / Colombia": string | null
          handle: string | null
          id: string
          "Price / Colombia": string | null
          "Product Category": string | null
          tags: string | null
          titulo: string | null
          "Variant Inventory Qty": string | null
        }
        Insert: {
          "Body (HTML)"?: string | null
          "Compare At Price / Colombia"?: string | null
          handle?: string | null
          id?: string
          "Price / Colombia"?: string | null
          "Product Category"?: string | null
          tags?: string | null
          titulo?: string | null
          "Variant Inventory Qty"?: string | null
        }
        Update: {
          "Body (HTML)"?: string | null
          "Compare At Price / Colombia"?: string | null
          handle?: string | null
          id?: string
          "Price / Colombia"?: string | null
          "Product Category"?: string | null
          tags?: string | null
          titulo?: string | null
          "Variant Inventory Qty"?: string | null
        }
        Relationships: []
      }
      Productos: {
        Row: {
          Categorias: string | null
          "Descripcion HTML": string | null
          Handle: string | null
          id: string
          "Imagen URL": string | null
          Precio: string | null
          SKU: string | null
          Tipo: string | null
          Titulo: string | null
          Vendedor: string | null
        }
        Insert: {
          Categorias?: string | null
          "Descripcion HTML"?: string | null
          Handle?: string | null
          id?: string
          "Imagen URL"?: string | null
          Precio?: string | null
          SKU?: string | null
          Tipo?: string | null
          Titulo?: string | null
          Vendedor?: string | null
        }
        Update: {
          Categorias?: string | null
          "Descripcion HTML"?: string | null
          Handle?: string | null
          id?: string
          "Imagen URL"?: string | null
          Precio?: string | null
          SKU?: string | null
          Tipo?: string | null
          Titulo?: string | null
          Vendedor?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
