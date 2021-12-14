class ChangeNamePosition < ActiveRecord::Migration[6.1]
  def change
    change_table :positions do |t|
      t.rename :type, :what_type
    end    
  end
end
