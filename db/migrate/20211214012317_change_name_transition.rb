class ChangeNameTransition < ActiveRecord::Migration[6.1]
  def change
    change_table :transitions do |t|
      t.rename :type, :what_type
    end   
  end
end
