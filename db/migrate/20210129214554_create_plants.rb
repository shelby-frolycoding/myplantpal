class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.references :user, null: false, foreign_key: true
      t.date :welcome_date
      t.date :last_watered
      t.date :last_fertilized
      t.integer :water_frquencey
      t.integer :feed_frequency

      t.timestamps
    end
  end
end
