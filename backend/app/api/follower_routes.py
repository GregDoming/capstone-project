from flask import Blueprint, jsonify, redirect, url_for, session, request
from app.models import User, db, Follower

follow_routes = Blueprint('followers', __name__)

@follow_routes.route('/', methods=['GET', 'POST', 'DELETE'])
def follows():
  current_user = session['user']

  if request.method == 'POST':
    follow_id = request.json.get("follow")
    follow = Follower (
        follower_by_id=user["id"],
        following_id=follow_id
    )
    db.session.add(follow)
    db.session.commit()
    follow = follow.to_dict()
    return {"follow" : follow}, 200
  
  elif request.method == 'DELETE':
    unfollow = request.json.get("unfollow")
    to_unfollow = Follower.query.get((user_session["id"],unfollow))
    db.session.delete(to_unfollow)
    db.session.commit()
    return {"msg": "unfollowed"}
  
  elif request.method == 'GET':
    follows_id = request.json.get("follow")
    follows = Follower.query.filter(Follower.follower_by_id==follows_id, Follower.verified==True).all()
    followed_by = Follower.query.filter(Follower.following_id==follows_id, Follower.verified==True).all()
    followed_by_requests = Follower.query.filter(Follower.following_id==follows_id, Follower.verified==False).all()
    return{"follow": follows, "followed_by": followed_by, "followed_by_request": followed_by_requests}