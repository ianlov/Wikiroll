class PositionsController < ApplicationController
  before_action :set_position, only: :update

  # GET /positions
  def index
    @positions = Position.all
    render json: @positions
  end

  # PATCH/PUT /positions/1
  def update
    if @position.update(position_params)
      render json: @position
    else
      render json: @position.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_position
      @position = Position.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def position_params
      params.require(:position).permit(:name, :description, :img_url)
    end
end
