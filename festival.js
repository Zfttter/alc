let tdc = document.querySelectorAll('.tdc')
let festival_img = document.querySelector('.festival_img')
let festival_des_text = document.querySelector('.festival_des_text')
for (let i = 0; i < tdc.length; i++) {
    tdc[i].onclick = function () {
        for (let j = 0; j < tdc.length; j++) {
            tdc[j].classList.remove('active_td')
        }
        tdc[i].classList.add('active_td')
        switch (i) {
            case 0:
                festival_img.src = 'https://annl.neocities.org/img13.jpg'
                festival_des_text.innerHTML = 'Dumplings have profound symbolic significance in Chinese culture, especially during important festivals\n' +
                    '                such as the Spring Festival. They are not only delicious food, but also carry many auspicious meanings'
                break
            case 1:
                festival_img.src = 'https://annl.neocities.org/img15.jpg'
                festival_des_text.innerHTML = ' Moon cake is an important food in the traditional Chinese festival - Mid-Autumn Festival, which\n' +
                    '                symbolizes reunion, harmony and harvest. Mooncakes are not just a delicious food'
                break
            case 2:
                festival_img.src = 'https://annl.neocities.org/img14.jpg'
                festival_des_text.innerHTML = ' Rice dumpling is an important food in the traditional Chinese festivals, Yuanxiao (Filled round balls\n' +
                    '                made of glutinous rice-flour for Lantern Festival) Festival and Winter Solstice Festival. It is usually\n' +
                    '                made of glutinous rice flour, symbolizing reunion, happiness and harmony. The round shape and soft\n' +
                    '                glutinous taste of rice dumpling endow it with rich symbolic meanings'
                break
            case 3:
                festival_img.src = 'https://annl.neocities.org/img16.jpg'
                festival_des_text.innerHTML = ' Chongyang cake is a specialty food during the traditional Chinese festival of Chongyang Festival (the\n' +
                    '                ninth day of the ninth lunar month). Chongyang cake is not only a festive delicacy, but also carries\n' +
                    '                profound cultural significance, symbolizing longevity, health, happiness, and respect for elders'
                break
            case 4:
                festival_img.src = 'https://annl.neocities.org/img22.jpeg'
                festival_des_text.innerHTML = 'This is a traditional food for the Laba Festival. It is usually made by boiling various grains and beans, such as rice, millet, red beans, mung beans, Job\'s tears, red dates, lotus seeds, etc.'
                break
            case 5:
                festival_img.src = 'https://annl.neocities.org/img23.jpeg'
                festival_des_text.innerHTML = 'A fried food that is crispy and exquisite. During the Cold Food Festival, because cooking cannot be done with fire, fried dough sticks are easy to preserve and consume, becoming a popular food among people'
                break
            case 6:
                festival_img.src = 'https://annl.neocities.org/img24.jpeg'
                festival_des_text.innerHTML = 'It is made by mixing wormwood juice into glutinous rice flour, and then wrapping it into bean paste stuffing or lotus paste stuffing. Qingtuan, with a vibrant green color and a fresh scent of mugwort, is a seasonal delicacy used to worship ancestors and taste during the Qingming Festival.'
                break
            case 7:
                festival_img.src = 'https://annl.neocities.org/img25.jpeg'
                festival_des_text.innerHTML = 'Festival food created in memory of Qu Yuan. Zongye is usually made of reed leaves or bamboo leaves, and the filling includes sweet zongzi such as red dates and bean paste, as well as salty zongzi such as pork belly and salted egg yolk'
                break


            case 8:
                festival_img.src = 'https://annl.neocities.org/img43.jpg'
                festival_des_text.innerHTML = 'In some places, eggplant cakes are made by cutting eggplants into slices, filling them with meat, and coating them with batter and deep frying;'
                break
            case 9:
                festival_img.src = 'https://annl.neocities.org/img44.jpg'
                festival_des_text.innerHTML = 'Qiaoguo is a traditional food on Qixi Festival. It is mainly fried food made of flour, sugar, honey, etc. It has different shapes, some like shuttles, some like weavers\' shuttles, etc. People eat Qiaoguo to pray for ingenuity'
                break
            case 10:
                festival_img.src = 'https://annl.neocities.org/img14.jpg'
                festival_des_text.innerHTML = 'There is a custom of eating dumplings on the winter solstice in northern regions, and it is said that not eating dumplings on the winter solstice will freeze one\'s ears; Many places in the south will eat rice dumpling or maci. rice dumpling symbolizes reunion. maci tastes soft and glutinous'
                break
            case 11:
                festival_img.src = 'https://annl.neocities.org/img45.jpg'
                festival_des_text.innerHTML = 'On this day, some northern regions will eat pork head, which symbolizes blessings and good fortune; Some places also eat stir fried beans, such as soybeans, black beans, etc. People believe that stir frying beans can awaken the Dragon King and pray for good weather.'
                break
        }
    }
}
