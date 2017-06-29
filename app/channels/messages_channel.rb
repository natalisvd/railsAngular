class MessagesChannel < ApplicationCable::Channel
  def subscribed
    # trip = Trip.find(params[:trip_id])
    # guide = Guide.find(params[:guide_id])

    stream_for [trip, guide]
  end
end
