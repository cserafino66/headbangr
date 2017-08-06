class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :text, null: false
      t.integer :jambase_id, null: false
      t.belongs_to :concert
      t.belongs_to :user

      t.timestamps null: false
    end
  end
end
