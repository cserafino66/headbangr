class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :user
end
