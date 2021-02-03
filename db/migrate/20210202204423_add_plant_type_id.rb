class AddPlantTypeId < ActiveRecord::Migration[6.1]
  def change
    add_column :plants, :plant_type_id, :int
    add_foreign_key :plants, :plant_types
  end
end
