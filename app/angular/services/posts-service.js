export default ['$http', function($http) {

    return {
        getDescriptiveMetaInfo() {
            return $http.get('./app/angular/apis/posts-meta.json', { cache: true });
        },

        getPost(post_id) {
            return $http.get('./app/angular/apis/posts/' + post_id + '.json', { cache: true });
        }
    }
}];
