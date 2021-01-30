class PlantTypesController < ApplicationController
  before_action :set_plant_type, only: [:show, :update, :destroy]

  # GET /plant_types
  def index
    @plant_types = PlantType.all

    render json: @plant_types
  end

  # GET /plant_types/1
  def show
    render json: @plant_type
  end

  # POST /plant_types
  def create
    @plant_type = PlantType.new(plant_type_params)

    if @plant_type.save
      render json: @plant_type, status: :created, location: @plant_type
    else
      render json: @plant_type.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /plant_types/1
  def update
    if @plant_type.update(plant_type_params)
      render json: @plant_type
    else
      render json: @plant_type.errors, status: :unprocessable_entity
    end
  end

  # DELETE /plant_types/1
  def destroy
    @plant_type.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_plant_type
      @plant_type = PlantType.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def plant_type_params
      params.require(:plant_type).permit(:type)
    end
end
