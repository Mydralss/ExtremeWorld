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
      Productos: {
        Row: {
          "Body (HTML)": string | null
          "Compare At Price / Colombia": string | null
          "Compare At Price / Internacional": string | null
          "Cost per item": string | null
          "Gift Card": string | null
          "Google Shopping / Age Group": string | null
          "Google Shopping / Condition": string | null
          "Google Shopping / Custom Label 0": string | null
          "Google Shopping / Custom Label 1": string | null
          "Google Shopping / Custom Label 2": string | null
          "Google Shopping / Custom Label 3": string | null
          "Google Shopping / Custom Label 4": string | null
          "Google Shopping / Custom Product": string | null
          "Google Shopping / Gender": string | null
          "Google Shopping / Google Product Category": string | null
          "Google Shopping / MPN": string | null
          Handle: string | null
          "Image Alt Text": string | null
          "Image Position": number | null
          "Image Src": string | null
          "Included / Colombia": string | null
          "Included / Internacional": string | null
          "Option1 Linked To": string | null
          "Option1 Name": string | null
          "Option1 Value": string | null
          "Option2 Linked To": string | null
          "Option2 Name": string | null
          "Option2 Value": string | null
          "Option3 Linked To": string | null
          "Option3 Name": string | null
          "Option3 Value": string | null
          "Price / Colombia": string | null
          "Price / Internacional": string | null
          "Product Category": string | null
          Published: string | null
          "SEO Description": string | null
          "SEO Title": string | null
          Status: string | null
          Tags: string | null
          Title: string | null
          Type: string | null
          "Variant Barcode": string | null
          "Variant Compare At Price": string | null
          "Variant Fulfillment Service": string | null
          "Variant Grams": string | null
          "Variant Image": string | null
          "Variant Inventory Policy": string | null
          "Variant Inventory Qty": string | null
          "Variant Inventory Tracker": string | null
          "Variant Price": string | null
          "Variant Requires Shipping": string | null
          "Variant SKU": string | null
          "Variant Tax Code": string | null
          "Variant Taxable": string | null
          "Variant Weight Unit": string | null
          Vendor: string | null
        }
        Insert: {
          "Body (HTML)"?: string | null
          "Compare At Price / Colombia"?: string | null
          "Compare At Price / Internacional"?: string | null
          "Cost per item"?: string | null
          "Gift Card"?: string | null
          "Google Shopping / Age Group"?: string | null
          "Google Shopping / Condition"?: string | null
          "Google Shopping / Custom Label 0"?: string | null
          "Google Shopping / Custom Label 1"?: string | null
          "Google Shopping / Custom Label 2"?: string | null
          "Google Shopping / Custom Label 3"?: string | null
          "Google Shopping / Custom Label 4"?: string | null
          "Google Shopping / Custom Product"?: string | null
          "Google Shopping / Gender"?: string | null
          "Google Shopping / Google Product Category"?: string | null
          "Google Shopping / MPN"?: string | null
          Handle?: string | null
          "Image Alt Text"?: string | null
          "Image Position"?: number | null
          "Image Src"?: string | null
          "Included / Colombia"?: string | null
          "Included / Internacional"?: string | null
          "Option1 Linked To"?: string | null
          "Option1 Name"?: string | null
          "Option1 Value"?: string | null
          "Option2 Linked To"?: string | null
          "Option2 Name"?: string | null
          "Option2 Value"?: string | null
          "Option3 Linked To"?: string | null
          "Option3 Name"?: string | null
          "Option3 Value"?: string | null
          "Price / Colombia"?: string | null
          "Price / Internacional"?: string | null
          "Product Category"?: string | null
          Published?: string | null
          "SEO Description"?: string | null
          "SEO Title"?: string | null
          Status?: string | null
          Tags?: string | null
          Title?: string | null
          Type?: string | null
          "Variant Barcode"?: string | null
          "Variant Compare At Price"?: string | null
          "Variant Fulfillment Service"?: string | null
          "Variant Grams"?: string | null
          "Variant Image"?: string | null
          "Variant Inventory Policy"?: string | null
          "Variant Inventory Qty"?: string | null
          "Variant Inventory Tracker"?: string | null
          "Variant Price"?: string | null
          "Variant Requires Shipping"?: string | null
          "Variant SKU"?: string | null
          "Variant Tax Code"?: string | null
          "Variant Taxable"?: string | null
          "Variant Weight Unit"?: string | null
          Vendor?: string | null
        }
        Update: {
          "Body (HTML)"?: string | null
          "Compare At Price / Colombia"?: string | null
          "Compare At Price / Internacional"?: string | null
          "Cost per item"?: string | null
          "Gift Card"?: string | null
          "Google Shopping / Age Group"?: string | null
          "Google Shopping / Condition"?: string | null
          "Google Shopping / Custom Label 0"?: string | null
          "Google Shopping / Custom Label 1"?: string | null
          "Google Shopping / Custom Label 2"?: string | null
          "Google Shopping / Custom Label 3"?: string | null
          "Google Shopping / Custom Label 4"?: string | null
          "Google Shopping / Custom Product"?: string | null
          "Google Shopping / Gender"?: string | null
          "Google Shopping / Google Product Category"?: string | null
          "Google Shopping / MPN"?: string | null
          Handle?: string | null
          "Image Alt Text"?: string | null
          "Image Position"?: number | null
          "Image Src"?: string | null
          "Included / Colombia"?: string | null
          "Included / Internacional"?: string | null
          "Option1 Linked To"?: string | null
          "Option1 Name"?: string | null
          "Option1 Value"?: string | null
          "Option2 Linked To"?: string | null
          "Option2 Name"?: string | null
          "Option2 Value"?: string | null
          "Option3 Linked To"?: string | null
          "Option3 Name"?: string | null
          "Option3 Value"?: string | null
          "Price / Colombia"?: string | null
          "Price / Internacional"?: string | null
          "Product Category"?: string | null
          Published?: string | null
          "SEO Description"?: string | null
          "SEO Title"?: string | null
          Status?: string | null
          Tags?: string | null
          Title?: string | null
          Type?: string | null
          "Variant Barcode"?: string | null
          "Variant Compare At Price"?: string | null
          "Variant Fulfillment Service"?: string | null
          "Variant Grams"?: string | null
          "Variant Image"?: string | null
          "Variant Inventory Policy"?: string | null
          "Variant Inventory Qty"?: string | null
          "Variant Inventory Tracker"?: string | null
          "Variant Price"?: string | null
          "Variant Requires Shipping"?: string | null
          "Variant SKU"?: string | null
          "Variant Tax Code"?: string | null
          "Variant Taxable"?: string | null
          "Variant Weight Unit"?: string | null
          Vendor?: string | null
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
