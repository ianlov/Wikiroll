class ChangeNameSubmission < ActiveRecord::Migration[6.1]
  def change
    change_table :submissions do |t|
      t.rename :type, :what_type
    end   
  end
end
