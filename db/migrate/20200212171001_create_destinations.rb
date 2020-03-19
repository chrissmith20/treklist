class CreateDestinations < ActiveRecord::Migration[5.2]
  def change
    create_table :destinations do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :google_places_place_id, null: false

      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end
