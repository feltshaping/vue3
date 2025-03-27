<template>
    <div>
        <canvas ref="canvas" :width="width" :height="height"></canvas>
    </div>
</template>

<script>
export default {
    name: 'CanvasComponent',
    props: {
        width: {
            type: Number,
            default: 500, // 默认宽度
        },
        height: {
            type: Number,
            default: 300, // 默认高度
        },
    },
    mounted() {
        this.draw(); // 在组件挂载后绘制内容
    },
    methods: {
        draw() {
            const canvas = this.$refs.canvas;
            if (!canvas) return;

            const ctx = canvas.getContext('2d'); // 获取 2D 上下文
            //因对高清屏(画板正常，画图没按原有1px使用2px渲染导致图发虚），以下canvas.style.width是关键，他修改会导致canvas.height修改，逻辑是整体画大图再缩小。
            const ratio = window.devicePixelRatio
            const oldWidth = canvas.width
            const oldHeight = canvas.height
            canvas.width = oldWidth * ratio
            canvas.height = oldHeight * ratio
            canvas.style.width = oldWidth + 'px'
            canvas.style.height = oldHeight + 'px'
            ctx.scale(ratio, ratio)
            // ctx.scale(ratio, ratio)
            ctx.save()
            ctx.fillStyle = 'red';
            ctx.fillRect(10, 10, 100, 100);
            // ctx.fillRect(10, 10, 100 * ratio, 100 * ratio);

            //以下直至restore内所做操作不会外泄
            // ctx.save();

            // // 修改样式并绘制第二个矩形
            // ctx.fillStyle = 'blue';
            // ctx.translate(150, 0); // 平移画布
            // ctx.fillRect(10, 10, 100, 100);

            // // 恢复到之前保存的状态
            // ctx.restore();

            // // 绘制第三个矩形（恢复为红色）
            // ctx.fillRect(290, 10, 100, 100);

        },
    },
};
</script>

<style scoped>
canvas {
    border: 1px solid #ccc;
    /* 添加边框以便更清晰地看到画布 */
}
</style>
