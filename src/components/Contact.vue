<template>
    <section id="contact"
        class="bg-white py-11 md:py-24 px-3 md:px-11 flex flex-col gap-3 rounded-xl w-[90%] mx-auto justify-around md:flex-row border-2 border-slate-200">
        <div
            class="py-6 px-6 md:px-11 md:w-2/4 border-2 rounded-xl border-slate-200 font-europa text-bodyColor space-y-5">
            <h2 class="font-europanuova text-2xl text-titleColor">Contact me</h2>
            <p><i class="fa-regular fa-envelope" /> luis.salcedo0906@gmail.com</p>
            <p><i class="fa-solid fa-mobile-screen" /> +57 3045409695</p>
            <p><i class="fa-solid fa-location-dot" /> Colombia, Santa Marta</p>
            <div class="flex gap-3">
                <a href="https://www.instagram.com/luissalcedo28/" target="_blank">
                    <i class="fa-brands fa-instagram fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/luis-salcedo-406895245/" target="_blank">
                    <i class="fa-brands fa-linkedin fa-2x"></i>
                </a>
                <a href="https://github.com/Behelit0906" target="_blank">
                    <i class="fa-brands fa-github fa-2x"></i>
                </a>
            </div>
        </div>
        <div class="md:w-2/4 border-2 border-slate-200 py-6 px-6 rounded-xl">
            <h2 class="text-2xl text-center mb-3 font-europanuova text-titleColor">Leave me a message :)</h2>
            <Form @submit="onSubmit" :validation-schema="schema"
                class="flex flex-col gap-y-5 font-europa text-bodyColor" v-slot="{ errors }">
                <div>
                    <Field v-model="name" class="w-full border-2 border-slate-200 rounded pl-1" name="name" type="text"
                        placeholder="Name" />
                    <ErrorMessage name="name" class="text-red" />
                </div>
                <div>
                    <Field v-model="email" class="w-full border-2 border-slate-200 rounded pl-1" name="email"
                        type="email" placeholder="Email" />
                    <ErrorMessage name="email" class="text-red" />
                </div>
                <div>
                    <textarea v-model="message" @change="change" @focus="change"
                        class="w-full border-2 border-slate-200 rounded pl-1" placeholder="Message" name="message"
                        cols="50" rows="5"></textarea>
                    <span v-if="messageError" class="text-red">Message is required</span>
                </div>
                <span v-if="messageSend" class="text-center text-green">Message sent :)</span>
                <button @click="change" class="bg-mainColor text-white rounded" type="submit">Send</button>
            </Form>
        </div>
    </section>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';
import { Form, Field, ErrorMessage } from 'vee-validate';

const message = ref('');
const name = ref('');
const email = ref('');
const messageError = ref(false);
const messageSend = ref(false);

watch(message, () => {
    if (message.value)
        messageError.value = false;
})

const change = () => {
    if (message.value)
        messageError.value = false;
    else
        messageError.value = true;
}

const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Email must be a valid email').required('Email is required'),
});

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicID = import.meta.env.VITE_PUBLIC_ID;

const onSubmit = (values: any) => {
    if (message.value) {
        values.message = message.value;
        emailjs.send(serviceId, templateId, values, publicID)
            .then((response) => {
                message.value = '';
                name.value = '';
                email.value = '';
                messageSend.value = true;
                setTimeout(() => {
                    messageSend.value = false;
                }, 3000)
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }
    else
        messageError.value = true;

}

</script>