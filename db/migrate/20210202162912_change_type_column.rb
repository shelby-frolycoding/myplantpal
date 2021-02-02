class ChangeTypeColumn < ActiveRecord::Migration[6.1]
  def change
   rename_column :plant_types, :type, :name
  end
end
