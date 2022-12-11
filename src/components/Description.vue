<script setup lang="ts">

const linkedin = new URL(`../assets/icons/linkedin.svg`, import.meta.url).href;
</script>

<template>
    <div id="about" class="description-container">
        <h2 class="description-title">About me</h2>
        <p class="description">
            Hi! my name is Luis and I enjoy creating things that live on internet. My interest in web development
            started back in 2021 when I decided to try editing a Conky theme for my Linux desktop, it resulted in
            learning more about CSS and getting the hang of it, at least until you try to center a div.
        </p>
        <div class="socialnetworks-container">
            <a class="socialIcon-container" href="https://web.facebook.com/luis.salcedo.37051">
                <svg class="facebook icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                    style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <path d="M384,176h-96v-64c0-17.664,14.336-32,32-32h32V0h-64l0,0c-53.024,0-96,42.976-96,96v80h-64v80h64v256
	h96V256h64L384,176z" id="id_101"></path>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                </svg>
            </a>


            <a class="socialIcon-container" href="https://www.linkedin.com/in/luis-salcedo-406895245/">
                <svg class="linkedin icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                    style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <g>
                        <rect y="160" width="114.496" height="352" id="id_101"></rect>
                        <path d="M426.368,164.128c-1.216-0.384-2.368-0.8-3.648-1.152c-1.536-0.352-3.072-0.64-4.64-0.896
		c-6.08-1.216-12.736-2.08-20.544-2.08l0,0l0,0c-66.752,0-109.088,48.544-123.04,67.296V160H160v352h114.496V320
		c0,0,86.528-120.512,123.04-32c0,79.008,0,224,0,224H512V274.464C512,221.28,475.552,176.96,426.368,164.128z"
                            id="id_102"></path>
                        <circle cx="56" cy="56" r="56" id="id_103"></circle>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                </svg>
            </a>

            <a class="socialIcon-container github-container" href="https://github.com/Behelit0906">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-github github icon">
                    <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        id="id_101" style="stroke: rgb(255, 255, 255);"></path>
                </svg>
            </a>

        </div>
        <a class="cv-link"
            href="https://drive.google.com/file/d/14NJeuXqHdFmKO90a1YeL5wOWIvfwcI5H/view?usp=sharing">VIEW CV</a>
    </div>
</template>

<style scoped>
.description-container {
    padding-top: 8%;
    padding-bottom: 20%;
    color: #fff;
    background-color: var(--main-color);
}

.description-title {
    text-align: center;
    font-family: 'europanuova', sans-serif;
    font-weight: 500;
    font-size: 1.9rem;
}

.description {
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 100px;
    font-family: 'europa', sans-serif;
    font-size: 1.3rem;
    text-align: center;
    line-height: 35px;
}

.cv-link {
    position: relative;
    top: -50px;
    display: block;
    width: 20%;
    min-width: 150px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 70px;
    padding: 10px;
    font-family: 'europa', sans-serif;
    color: var(--main-color);
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
}

.socialnetworks-container {
    position: relative;
    display: flex;
    top: -80px;
    justify-content: center;
    gap: 2%;
}

.socialIcon-container {
    display: block;
    width: 20px;
    height: 20px;
    padding: 15px;

    border-radius: 50%;
    border: 2px solid #fff;
}

.facebook {
    width: 100%;
    height: 100%;
    display: block;
    fill: #fff;
}

.linkedin {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 80%;
    fill: #fff;
}

.github-container {
    position: relative;
}

.github {
    position: relative;
    left: -1px;
    display: block;
    width: 110%;
    height: 110%;
}

.socialIcon-container:hover {
    background-color: #fff;
}

.socialIcon-container:hover .icon {
    fill: var(--main-color);
}

@media screen and (max-width:500px) {

    .description-container {
        padding-top: 15%;
        padding-bottom: 25%;
    }

    .description-title {
        font-size: 1.4rem;
    }

    .description {
        width: 82%;
        font-size: 19px;
    }
}
</style>