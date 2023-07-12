/**
 颜色拾取器
<input type="color" value="#e0ffee" id="colorPicker">
<b>Current color code: <code id="colorCode"></code></b>

<script>
colorPicker.addEventListener("input", setColor);

function setColor() {
	body.style.backgroundColor = input.value;
	colorCode.innerHTML = input.value;
}
</script>
 */