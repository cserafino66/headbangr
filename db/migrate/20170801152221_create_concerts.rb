class CreateConcerts < ActiveRecord::Migration[5.1]
  def change
    create_table :concerts do |t|
      t.string :artist, null: false
      t.string :venue, null: false
      t.string :location, null: false
      t.datetime :start_date, null: false

      t.timestamps null: false
    end
  end
end
