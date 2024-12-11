<template>
    <p>
      Золушка танцует с принцем... Мелодия словно взлетает фейерверком, радостно-взволнованная.
      Но теплое звучание струнных инструментов, волшебные всплески арфы сменяются тревожными звуками барабанов и медных духовых инструментов - чувствуются скрытая тревога, беспокойство.
      Золушка была так счастлива, танцуя с принцем, но время пролетело так незаметно.
    </p>
    <div class="audio">
      <span class="audio__label">
        С.Прокофьев - "Вальс"
      </span>
      <audio controls>
        <source src="./audio/С.Прокофьев%20-%20«Вальс».mp3" type="audio/mpeg">
      </audio>
    </div>
    <p>
      "Бой часов" - жесткий, неумолимый, стремительно отсчитывающий секунды и минуты, разлучает Золушку и принца.
      Часы в балете С.Прокофьева - одна из ярких находок композитора.
    </p>
    <div class="audio">
      <span class="audio__label">
        С.Прокофьев - "Бой часов"
      </span>
      <audio controls>
        <source src="./audio/С.Прокофьев%20-%20«Бой%20часов».mp3" type="audio/mpeg">
      </audio>
    </div>
    <p>
      (О.П.Радынова "Слушаем музыку")
    </p>
</template>
<script setup lang="ts">

document.addEventListener('play', function(e) {
  const audios = document.getElementsByTagName('audio');
  for(let i = 0; i < audios.length; i++) {
    if(audios[i] != e.target) {
      audios[i].pause();
    }
  }
}, true);

</script>
<style scoped>
.audio {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.audio__label {
  margin-left: 24px;
}
</style>