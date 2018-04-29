<!-- Sidebar Widgets Column -->
      <div class="col-md-4">

        

        <!-- Categories Widget -->
        <div class="card my-4">
          <h5 class="card-header">Genres</h5>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-12">
                <ul class="list-unstyled mb-0">
                    @foreach($genres as $genre)
                    <?php 
                        $slug = $genre;
                        $slug = str_slug($slug, "-");
                    ?>
                      
                      <li>
                        <a href="/movie/genre/{{$slug}}">
                          {{ $genre }}
                        </a>
                      </li>
                    @endforeach
                </ul>
              </div>
              
            </div>
          </div>
        </div>

     

       

      </div>
