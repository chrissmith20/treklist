class CreateDestinations < ActiveRecord::Migration[5.2]
  def change
    create_table :destinations do |t|
      t.string :title, null: false
      t.string :description, null: false

      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end
