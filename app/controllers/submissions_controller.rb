class SubmissionsController < ApplicationController
  before_action :set_submission, only: [:update, :destroy]

  # GET /submissions
  def index
    @position = Position.find(params[:position_id])
    @submissions = Submission.where(position_id: @position.id)
    render json: @submissions, status: :ok
  end

  # POST /submissions
  def create
    @submission = Submission.new(submission_params)
    @position = Position.find(params[:position_id])
    @submission.position = @position
    if @submission.save
      render json: @submission, status: :created
    else
      render json: @submission.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /submissions/1
  def update
    if @submission.update(submission_params)
      render json: @submission
    else
      render json: @submission.errors, status: :unprocessable_entity
    end
  end

  # DELETE /submissions/1
  def destroy
    @submission.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_submission
      @submission = Submission.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def submission_params
      params.require(:submission).permit(:name, :description, :img_url, :what_type)
    end
end
