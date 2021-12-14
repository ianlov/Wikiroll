class AddForeignRefKeyToTransitions < ActiveRecord::Migration[6.1]
  def change
    add_foreign_key :transitions, :positions, column: :start_id
    add_foreign_key :transitions, :positions, column: :finish_id
  end
end
