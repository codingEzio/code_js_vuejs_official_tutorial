<template>
	<div id="app">
		<h1>My fancy Todo App 🤗</h1>
		<TodoList/>
	</div>
</template>

<script>
    import TodoList from "./components/TodoList.vue";

    export default {
        name: 'app',
        components: {
            TodoList,
        }
    };
</script>

<style lang="scss">
	@import "./styles/variables.scss";
	
	*, *::before, *::after {
		box-sizing: border-box;
	}
	
	#app {
		max-width: 400px;
		margin: 0 auto;
		line-height: 1.4;
		font-family: 'Rubik', 'Roboto', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: $vue-blue;
	}
	
	h1 {
		text-align: center;
	}
</style>
