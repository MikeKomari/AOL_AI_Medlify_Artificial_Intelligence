from flask import Flask, request, jsonify
import tensorflow as tf
from tensorflow.keras.models import load_model

import numpy as np
from datetime import datetime, timedelta
from flask_cors import CORS 

import numpy as np
import io
import tensorflow as tf
from flask import Flask, request, jsonify
from PIL import Image
from tensorflow.keras.models import load_model
from flask_cors import CORS 

app = Flask(__name__)

# Load your CNN model here
def load_model():
    return load_model('./BrainStrokeClassifier.keras')

model = load_model()

@app.route('/predict', methods=['POST'])
def predict_stroke():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']

    try:
       
        image = Image.open(io.BytesIO(file.read()))
        
        image = image.resize((224, 224))
        image_array = np.array(image) / 255.0 
        image_array = image_array.reshape((1, 224, 224, 3)) 

        # Make a prediction
        prediction = model.predict(image_array)
        stroke_probability = float(prediction[0][0]) 

        return jsonify({
            'stroke_probability': stroke_probability,
            'has_stroke': stroke_probability > 0.5  
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)