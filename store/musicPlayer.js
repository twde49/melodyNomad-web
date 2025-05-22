import { defineStore } from 'pinia'

export const useMusicPlayerStore = defineStore('musicPlayer', {
  state: () => ({
    isPlaying: false,
    isReady: false,
    musicSrc: '/music/background-music.mp3',
    audioElement: null,
  }),

  actions: {
    initialize(audioElement) {
      this.audioElement = audioElement
      this.isReady = true
      console.log('Initializing music player and starting playback')
      this.attemptAutoplay()
    },

    toggleMusic() {
      if (!this.audioElement) return

      if (this.isPlaying) {
        this.audioElement.pause()
        this.isPlaying = false
        console.log('Music paused')
      } else {
        const playPromise = this.audioElement.play()
        if (playPromise !== undefined) {
          playPromise.then(() => {
            this.isPlaying = true
            console.log('Music started playing')
          }).catch(error => console.log('Playback prevented:', error))
        }
      }
      console.log('Music state:', this.isPlaying)
    },

    attemptAutoplay() {
      if (!this.audioElement) return
      console.log('Attempting music autoplay')

      const playPromise = this.audioElement.play()
      if (playPromise !== undefined) {
        playPromise.then(() => {
          this.isPlaying = true
          console.log('Autoplay successful')
        }).catch(() => {
          this.isPlaying = false
          console.log('Autoplay prevented by browser')
        })
      }
    }
  }
})
