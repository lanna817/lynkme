class CreateLocalArts < ActiveRecord::Migration[6.0]
  def change
    create_table :local_arts do |t|
      t.string :name
      t.string :image_url
      t.text :bio
      t.text :location

      t.timestamps
    end
  end
end
