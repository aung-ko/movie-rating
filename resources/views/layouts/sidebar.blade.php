

        <!-- Categories Widget -->
      
          
            <div class="row">
              <div class="col-lg-12">
                <ul class="list-unstyled mb-0">
                    @foreach($genres as $genre)
                    <?php 
                        $slug = $genre;
                        $slug = str_slug($slug, "-");
                    ?>
                      
                      
                        <button href="/movie/genre/{{$slug}}" class="btn btn-warning">
                          {{ $genre }}
                        </button>
                        
                      <br>
                      <br>
                    @endforeach
                </ul>
              </div>
              
            </div>
         
      

     

