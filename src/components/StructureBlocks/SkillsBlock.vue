<script lang="ts" setup>
import TwoColumnContent from "../TwoColumnContent.vue";
import TitledContent from "../UIElements/TitledContent.vue";
import ProgressBar from "../UIElements/ProgressBar.vue";
import { useLanguageStore } from "../../store/lang";

interface SkillBar {
    name: string;
    color: string;
    value: number;
}

const lang = useLanguageStore();

const skills: SkillBar[] = [
    {
        name: "HTML, CSS & Javascript",
        color: "#ef652a",
        value: 100,
    },
    {
        name: "Vue.js",
        color: "#42b883",
        value: 90,
    },
    {
        name: "SASS",
        color: "#cf649a",
        value: 70,
    },
    {
        name: "Bootstrap",
        color: "#7533f9",
        value: 45,
    },
    {
        name: "Typescript",
        color: "#2d79c7",
        value: 80,
    },
    {
        name: "Git",
        color: "#f74e27",
        value: 60,
    },
    {
        name: "English",
        color: "#115fd6",
        value: 60,
    },
];

skills.sort((a, b) => b.value - a.value);
</script>

<template>
    <TwoColumnContent>
        <template #first>
            <div class="flex-center">
                <div>
                    <TitledContent
                        :title="lang.translationFor('content', 'skills.header')"
                        header-align="left"
                        paragraph-align="justify"
                    >
                        <div id="skills"></div>
                        {{ lang.translationFor("content", "skills.paragraph") }}
                    </TitledContent>
                </div>
            </div>
        </template>
        <template #second>
            <div class="flex-center skills-flex">
                <template v-for="skill in skills" :key="skill.name">
                    <p class="content-paragraph">{{ skill.name }}</p>
                    <ProgressBar
                        class="skill-progress"
                        :progress-color="skill.color"
                        :value="skill.value"
                    />
                </template>
            </div>
        </template>
    </TwoColumnContent>
</template>

<style lang="scss" scoped>
.skill-progress {
    width: 50%;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
}
.skills-flex {
    align-items: flex-end;
}
</style>
