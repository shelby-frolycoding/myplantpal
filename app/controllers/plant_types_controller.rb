class PlantTypesController < ApplicationController
  def index
    @plant_types = PlantType.all

    render json: @plant_types
  end

  def add_plant_to_plant_types
    @plant_type = PlantType.find(params[:plant_type_id])
    @plant = Plant.find(params[:plant_id])
    @plant.plant_types << @plant_type
    render json: @plant, include: :plant_types
  end
end
