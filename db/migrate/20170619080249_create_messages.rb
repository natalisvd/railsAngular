class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
        t.string   "sender_type",   null: false
        t.integer  "sender_id",     null: false
        t.string   "receiver_type", null: false
        t.integer  "receiver_id",   null: false
        t.text     "body",
        t.timestamps
    end
  end
end
