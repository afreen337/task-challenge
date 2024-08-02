const cl = console.log;

const MovieCardContainer = document.getElementById('MovieCardContainer')

// to 5 >> red 
// 5 to 7.499 >> yellow 
// 7.5 > green 


let IMG_BASE_URL ='https://image.tmdb.org/t/p/w500'


let movieCardHtml = ''
for(let i = 0; i < movieArray.length; i++){
    movieCardHtml += `
    <div class="col-md-4 mb-4">
    <div class="card">
    <figure class="moviecard text-white">
        <img class="w-100"
        src="https://image.tmdb.org/t/p/w500${movieArray[i].poster_pat}h" alt="Antman">
         <figcaption>
            <div class="movieTitle p-3">
                <div class="row">
                    <div class="col-md-10">
                        <h3 class="mb-0">
                            ${movieArray[i].title}
                        </h3>
                    </div>
                    <div class="col-2 align-self-centre">
                        <span class="${setRatingBg(movieArray[i].vote_average)} p-2 rating">
                            ${movieArray[i].vote_average}
                        </span>
                    </div>
                </div>
            </div>
            <div class="movieOverview">
                <h4 class="mb-0">
                   ${movieArray[i].title}
                </h4>
                <p>
                    <em>Overview</em>
                    ${movieArray[i].overview}
                </p>
            </div>

         </figcaption>
    </figure>
    </div>

</div>
`
    

    

}

MovieCardContainer.innerHtml = movieCardHtml;


function setRatingBg(rating){
    if(rating > 7.5){
        return 'bg-success'
    }else if(rating <= 7.5 && rating > 5){
        return 'bg-warning'
    }else{
        return 'bg-danger'
    }

}






