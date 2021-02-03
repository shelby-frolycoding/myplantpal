class PlantsController < ApplicationController
  before_action :set_plant, only: [:show, :update]
  before_action :authorize_request, only: [:create, :update, :destroy]


 
  def index
    @plants = Plant.all

    render json: @plants
  end

  
  def show
    render json: @plant, include: :plant_types
  end

 
  def create
    @plant = Plant.new(plant_params)

    if @plant.save
      render json: @plant, status: :created, location: @plant
    else
      render json: @plant.errors, status: :unprocessable_entity
    end
  end

  
  def update
    puts params
    if @plant.update(plant_params)
      render json: @plant
    else
      render json: @plant.errors, status: :unprocessable_entity
    end
  end

 
  def destroy
    @plant = @current_user.plants.find(params[:id])
   
    @plant.destroy
  end

  private
    
    def set_plant
      @plant = Plant.find(params[:id])
    end

   
    def plant_params
      params.require(:plant).permit(:name, :user_id, :welcome_date, :last_watered, :last_fertilized, :water_frquencey, :feed_frequency, :plant_type_id)
    end
end
