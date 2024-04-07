<script>
    export let label = '';
    export let value = '';
    export let readonly = false;
  </script>
  
  <div class="details">
    <label for="name">{label}:</label>
    <input type="text" name="name" bind:value={value} readonly={readonly} />
  </div>
  
  <style>
    .details {
      width: 100%;
      height: auto;
      margin-bottom: 20px;
      padding: 10px;
      box-sizing: border-box;
      border-radius: 5px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
    }
  
    label {
      font-weight: bold;
      margin-bottom: 5px;
    }
  
    input[type='text'] {
		/* width: calc(100% - 20px);  */
		width: 150px;
		height: 30px;
		padding: 5px 10px;
		border: none;
		border-radius: 3px;
		background-color: #f5f5f5;
		color: #333;
		box-sizing: border-box;
		font-size: 14px;
		font-weight: 500;
		line-height: 1.5;
		outline: none; 
	}

  </style>
  