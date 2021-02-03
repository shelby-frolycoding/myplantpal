class DeletePlantTYpes < ActiveRecord::Migration[6.1]
  def change
  drop_join_table :plants, :types
  end
end
