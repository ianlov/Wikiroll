class TransitionsController < ApplicationController
  before_action :set_transition, only: [:show, :update, :destroy]

  # GET /transitions
  def index
    @position = Position.find(params[:position_id])
    @transitions = Transition.where(start_id: @position.id)

    render json: @transitions
  end

  # GET /transitions/1
  def show
    render json: @transition
  end

  # POST /transitions
  def create
    @transition = Transition.new(transition_params, :position_id)

    if @transition.save
      render json: @transition, status: :created
    else
      render json: @transition.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /transitions/1
  def update
    if @transition.update(transition_params)
      render json: @transition
    else
      render json: @transition.errors, status: :unprocessable_entity
    end
  end

  # DELETE /transitions/1
  def destroy
    @transition.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_transition
      @transition = Transition.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def transition_params
      params.require(:transition).permit(:name, :description, :img_url, :start_id, :finish_id)
    end
end
