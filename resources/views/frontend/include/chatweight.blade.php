

<div class="main-section">
	
	<div class="col-md-12 col-sm-12 col-xs-12 first-section">
		<div class="row" id='closeopen'>
			<div class="col-md-8 col-sm-6 col-xs-6 ">
				<p>Movie Spicy Chatroom<span class="badge badge-pill badge-danger">@{{ numberOfUsers }}</span></p>

			</div>
			<div class="col-md-4 col-sm-6 col-xs-6 right-first-section">
				
				
			</div>
		</div>
		
	</div>


	
	
	<div class="col-md-12 col-sm-12 col-xs-12 second-section">
		<div class="chat-section">
			<div class="badge badge-pill badge-primary">@{{ typing }}</div>
			
			<ul v-chat-scroll>
				<message 
				v-for ="value,index in chat.message"
				:key= value.index
				:color=chat.color[index]
				:user= chat.user[index]
				:time= chat.time[index]
				>
				@{{ value }}

			</message>
		</ul>
	</div>
</div>

<div class="col-md-12 col-sm-12 col-xs-12 third-section">
	<div class="text-bar">
		<input type="text" placeholder="Write your messege here ..." v-model='message' @keyup.enter='send'>
		<button class="btn btn-info btn-sm" id="btn-chat" @click="send">
			Send
		</button>
	</div>
</div>

</div>

