<script setup>
import { onMounted, ref } from 'vue'

const playSound = (sound) => {
  const audio = new Audio(`/musicEffects/${sound}.mp3`)
  audio.play()
}
const complexityGame = ref(1500)
const endGame = ref(false)
const countRounds = ref(0)
const randomRound = ref([])
const playerRounds = ref([])
const clicks = ref(0)

onMounted(() => {
  startGame()
})

const startGame = () => {
  setTimeout(() => {
    if (!endGame.value) {
      countRounds.value++
      playerRounds.value = []
      clicks.value = 0
      for (let i = 0; i < 1; i++) {
        randomRound.value.push(Math.floor(Math.random() * 4))
        for (let j = 0; j < countRounds.value; j++) {
          setTimeout(() => {
            playSound(randomRound.value[j])
            document.getElementById(randomRound.value[j]).classList.add('brightness-200')
            setTimeout(() => {
              document.getElementById(randomRound.value[j]).classList.remove('brightness-200')
            }, 200)
          }, j * complexityGame.value)
        }
      }
    } else {
      countRounds.value = 0
      randomRound.value.length = 0
      endGame.value = false
    }
  }, 500)
}

const player = (event) => {
  playSound(event.target.id)
  clicks.value++
  playerRounds.value.push(event.target.id)
  if (String(clicks.value) > String(countRounds.value)) {
    countRounds.value = 0
    randomRound.value.length = 0
    endGame.value = false
  } else {
    if (String(clicks.value) == String(countRounds.value)) {
      if (String(playerRounds.value) === String(randomRound.value)) {
        startGame()
        endGame.value = false
      } else {
        countRounds.value = 0
        randomRound.value.length = 0
        endGame.value = false
      }
    }
  }
}

const editTiming = (event) => {
  complexityGame.value = event.target.value
  console.log(complexityGame.value)
}
</script>

<template>
  <div class="bg-slate-800 w-screen h-screen flex justify-center items-center flex-col relative">
    <h1 class="text-white font-sans text-5xl absolute top-10">Simon Says</h1>
    <div
      class="flex items-center gap-20 max-[620px]:gap-5 max-[620px]:flex-col max-[620px]:h-3/4 max-[620px]:w-full p-5"
    >
      <div
        class="rounded-full bg-white w-96 h-96 grid grid-cols-2 grid-rows-2 overflow-hidden shadow-cyan-500 shadow-md [&>*]:transition-[0.3s] max-[620px]:w-64 max-[620px]:h-64"
      >
        <div class="bg-cyan-500 hover:brightness-200 cursor-pointer" @click="player" id="0"></div>
        <div class="bg-red-500 hover:brightness-200 cursor-pointer" @click="player" id="1"></div>
        <div class="bg-yellow-500 hover:brightness-200 cursor-pointer" @click="player" id="2"></div>
        <div class="bg-lime-500 hover:brightness-200 cursor-pointer" @click="player" id="3"></div>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-white text-3xl font-sans font-bold">{{ countRounds }}</span>
        <button
          class="text-white mt-10 text-3xl font-sans font-bold bg-slate-700 px-4 py-2 rounded-xl"
          @click="startGame"
        >
          Play
        </button>
        <select
          class="mt-10 font-sans font-bold bg-slate-700 px-4 py-2 rounded-xl text-white"
          defaultValue="1500"
          @click="editTiming($event)"
        >
          <option value="1500">Легкий</option>
          <option value="1000">Средний</option>
          <option value="400">Сложный</option>
        </select>
      </div>
    </div>
  </div>
</template>
