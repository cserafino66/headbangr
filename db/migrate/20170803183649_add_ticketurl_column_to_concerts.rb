class AddTicketurlColumnToConcerts < ActiveRecord::Migration[5.1]
  def change
    add_column :concerts, :ticket_url, :string
  end
end
