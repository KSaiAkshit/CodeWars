<script>
    export let url;
</script>

<a href={url} class="section">
    <div class="lhs">
        <slot name="lhs" />
    </div>
    <div class="rhs">
        <slot name="rhs" />
        <div class="button" style="position:absolute;bottom:20px;right:15px;">
            See More &rarr;
        </div>
    </div>
</a>

<style>
    .section {
        display: flex;
        border: 1px solid #8888;
        border-radius: 2rem;
        height: 300px;
        margin: 10px 0;
    }
    .lhs {
        height: 100%;
        width: 50%;
    }
    .rhs {
        height: calc(100% - 4rem);
        width: calc(50% - 4rem);
        padding: 2rem;
        position: relative;
    }
</style>
