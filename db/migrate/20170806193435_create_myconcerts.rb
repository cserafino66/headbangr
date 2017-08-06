class CreateMyconcerts < ActiveRecord::Migration[5.1]
  def change
    create_table :myconcerts do |t|
      t.integer :jambase_id, null: false
      t.string :artist, null: false
      t.string :venue, null: false
      t.datetime :start_date, null: false
      t.string :ticket_url, null: false

      t.belongs_to :user
      t.belongs_to :concert
    end
  end
end
