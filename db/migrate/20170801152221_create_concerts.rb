class CreateConcerts < ActiveRecord::Migration[5.1]
  def change
    create_table :concerts do |t|
      t.string :artist, null: false
      t.string :venue, null: false
      t.datetime :start_date, null: false
      t.integer :jambase_id, null: false
    end
  end
end
