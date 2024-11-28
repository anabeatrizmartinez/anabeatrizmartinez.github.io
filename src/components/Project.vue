<template>
  <div>
    <span class="subTitle" :id="project.nameId">{{ project.title }}</span>
    
    <div class="description-container">
      <p>{{ description }}</p>
      
      <br>

      <div v-if="skillsList.length > 0">
        <p style="margin-bottom: 8px;"><strong>Development Tasks:</strong></p>
      </div>
      
      <ul>
        <li v-for="skill in skillsList" :key="skill.id" class="level-1-item">
          <span class="icon level-1"></span>
          <span class="text">{{ skill.description }}</span>
    
          <ul>
            <li v-for="subSkill in skill.subSkills" :key="subSkill.id" class="level-2-item">
              <span class="icon level-2"></span>
              <span class="text">{{ subSkill.description }}</span>
            </li>
          </ul>
        </li>
      </ul>
      
      <br>
      
      <div style="margin-bottom: 40px;" v-if="linksList.length > 0">
        <div v-for="link in linksList" :key="link.id">
          <p>{{ link.description }}</p>

          <div class="a-container">
            <a :href="'https://' + link.url" target="_blank">{{ link.url }}</a>
          </div>
        </div>
      </div>

      <div class="gameplay" v-if="project.gameplayLink !== ''">
        <iframe class="iframe-youtube" :src="project.gameplayLink" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div v-if="project.captures.length > 0">
        <v-row>
          <v-col v-for="(capture, index) in project.captures" :key="capture.id" cols="6" md="4" class="capture-container">
            <v-img :src="capture.src" class="capture" @click="openPopover(index)"></v-img>
          </v-col>
        </v-row>

        <v-overlay v-model="popover" :opacity="0.9" scrim="#353535" class="d-flex align-center justify-center">
          <v-carousel v-model="currentSlide" hide-delimiters>
            <v-carousel-item v-for="(capture, index) in project.captures" :key="index" :src="capture.src"></v-carousel-item>
          </v-carousel>
        </v-overlay>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    project: {
      type: Object,
      default: () => ({
        id: null,
        nameId: '',
        title: '',
        description: '',
        gameplayLink: '',
        captures: [],
      })
    },
  },
  data() {
    return {
      description: "",
      skillsList: [],
      skills: [],
      subSkills: [],
      linksList: [],
      links: [],
      popover: false,
      currentSlide: 0
    };
  },
  created() {
    this.processProjectInfo();
  },
  methods: {
    processProjectInfo() {
      let projectOrig = this.project;
  
      // Separate skills
      let projectDivided = projectOrig.description.split('*');
      this.description = projectDivided.shift();

      if (projectDivided.length > 0) {
        this.skills = projectDivided.map((description, index) => {
          return {
            description,
            id: index + 1
          }
        });
      }

      // Extract links
      let index = this.skills.findIndex(skill => skill.description.includes('http'));
      if (index != -1) {
        this.links = this.skills.splice(index, this.skills.length - index);
        this.processLinks();
      }

      // Set subskills if needed
      for (const skill of this.skills) {
        let newSkill = {
          ...skill,
          subSkills: []
        };

        if (skill.description.includes('-')) {
          let skillDivided = skill.description.split('-');
          const description = skillDivided.shift();
          let subSkills = skillDivided.map((description, index) => {
            return {
              description,
              id: index + 1
            }
          });

          newSkill = {
            id: newSkill.id,
            description,
            subSkills
          }
        }

        this.skillsList.push(newSkill);
      }
    },

    processLinks() {
      for (const link of this.links) {
        let linkDivided = link.description.split('https://');
        const description = linkDivided[0];
        const url = linkDivided[1];

        let newLink = {
          description,
          url,
          id: link.id
        }
        
        this.linksList.push(newLink);
      }
    },

    openPopover(index) {
      this.currentSlide = index;
      this.popover = true;
    }
  }
};
</script>

<style scoped>
.a-container {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--primary-color);
}

.capture-container {
  margin: auto;
  cursor: pointer;
}

.capture {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>