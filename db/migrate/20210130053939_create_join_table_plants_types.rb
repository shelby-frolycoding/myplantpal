class CreateJoinTablePlantsTypes < ActiveRecord::Migration[6.1]
  def change
    create_join_table :plants, :types do |t|
      # t.index [:plant_id, :type_id]
      # t.index [:type_id, :plant_id]
    end
  end
end
