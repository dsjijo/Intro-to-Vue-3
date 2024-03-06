app.component('review-list',{
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
        `<div class='review-container'>
            <h3>Reviews:</h3>
            <ul>
                <li v-for="(review,index) in reviews" :key="index"> 
                    {{ review.name }} has given {{review.rating}} rating<span v-if="review.willRecommend == 'YES'"> and Recommends</span>.
                    <br/>
                    "{{ review.review }}" 
                </li>
            </ul> 
        </div>
        `
})