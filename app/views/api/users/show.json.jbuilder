json.set! @user.id do 
  json.extract! @user, :id, :email, :fname, :lname, :introduction
  json.photoUrl url_for(@user.photo)
end