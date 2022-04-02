//Adding a little functionality with vue.js

const app = Vue.createApp({

    data() {
        return{
            showSkills: false,
            skills: [
                {title: 'Master/ Influencer', list: ['JavaScript', 'CSS', 'Vue.js', 'React', 'HTML5'], isFav: true},
                {title: 'Expert', list: ['Business Intelligence', 'Analytics', 'Blockchain', 'React', 'HTML5'], isFav: false},
                {title: 'Proficient', list: ['Internet of things', 'AI', 'cloud', 'Machine learning', 'Web'], isFav: false}, 
                {title: 'Interested', list: ['Internet of things', 'AI', 'cloud', 'Machine learning', 'Web'], isFav: false}
            ],
            people: [
                {name: 'Peter Shwnm', position: 'Front-end Developer', img: 'assets/profile1.jpg'},
                {name: 'Sarah Adkins', position: 'Senior React Developer', img: 'assets/profile2.jpg'},
                {name: 'Joseph Kagwwa', position: 'Back-end Developer', img: 'assets/profile3.jpg'},
            ]
        }
    },
    methods: {
        toggleShowSkills() {
            this.showSkills = !this.showSkills
        },
        toggleFav(skill) {
            skill.isFav = !skill.isFav
        }
    },
    computed: {
        filteredSkills() {
            return this.skills.filter((skill) => skill.isFav)
        }
    }
})

app.mount ('#app')