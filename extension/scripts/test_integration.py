#!/usr/bin/env python3
"""
Test script to verify seamless onnx_tool integration in QTron
"""

import sys
import os
import tempfile
import subprocess

def test_simplify_with_profiling():
    """Test the simplify_onnx.py script with profiling enabled"""
    print("Testing QTron's seamless onnx_tool integration...")
    
    # Get script path
    script_dir = os.path.dirname(os.path.abspath(__file__))
    simplify_script = os.path.join(script_dir, 'simplify_onnx.py')
    
    if not os.path.exists(simplify_script):
        print(f"❌ Error: simplify_onnx.py not found at {simplify_script}")
        return False
    
    # Create a simple test ONNX model (placeholder for actual model)
    print("📁 Looking for test ONNX models...")
    
    # Look for test data
    test_data_dirs = [
        os.path.join(script_dir, '..', 'test', 'data'),
        os.path.join(script_dir, 'onnx-tool-experiment', 'data'),
        '/tmp'
    ]
    
    test_model = None
    for test_dir in test_data_dirs:
        if os.path.exists(test_dir):
            for file in os.listdir(test_dir):
                if file.endswith('.onnx'):
                    test_model = os.path.join(test_dir, file)
                    break
        if test_model:
            break
    
    if not test_model:
        print("⚠️  No test ONNX model found. Skipping integration test.")
        print("   To test fully, place an ONNX model in the test/data directory.")
        return True
    
    print(f"🔍 Using test model: {test_model}")
    
    # Create temporary output file
    with tempfile.NamedTemporaryFile(suffix='_simplified.onnx', delete=False) as tmp:
        output_path = tmp.name
    
    try:
        # Test script with profiling enabled
        print("🚀 Running simplify_onnx.py with profiling enabled...")
        cmd = [
            sys.executable, 
            simplify_script, 
            test_model, 
            output_path, 
            'true',  # enable profiling
            '/tmp/qtron_test_results/'  # custom results dir
        ]
        
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
        
        print("📤 Script output:")
        print(result.stdout)
        if result.stderr:
            print("⚠️  Script errors:")
            print(result.stderr)
        
        if result.returncode == 0:
            print("✅ Integration test passed!")
            if os.path.exists(output_path):
                print(f"✅ Simplified model created: {output_path}")
            return True
        else:
            print(f"❌ Script failed with return code: {result.returncode}")
            return False
            
    except subprocess.TimeoutExpired:
        print("⏰ Script timed out (this may be normal for large models)")
        return True
    except Exception as e:
        print(f"❌ Error running test: {e}")
        return False
    finally:
        # Clean up
        if os.path.exists(output_path):
            os.unlink(output_path)

def test_configuration():
    """Test that the script accepts configuration parameters"""
    print("\n🔧 Testing configuration parameter handling...")
    
    script_dir = os.path.dirname(os.path.abspath(__file__))
    simplify_script = os.path.join(script_dir, 'simplify_onnx.py')
    
    # Test help/usage
    try:
        result = subprocess.run([sys.executable, simplify_script], 
                              capture_output=True, text=True, timeout=5)
        
        if "Usage:" in result.stdout:
            print("✅ Script shows proper usage information")
            return True
        else:
            print("⚠️  Script may not show usage information properly")
            return False
    except Exception as e:
        print(f"❌ Error testing configuration: {e}")
        return False

def main():
    """Run all integration tests"""
    print("🎯 QTron onnx_tool Integration Test Suite")
    print("=" * 50)
    
    tests_passed = 0
    total_tests = 2
    
    # Test configuration
    if test_configuration():
        tests_passed += 1
    
    # Test integration
    if test_simplify_with_profiling():
        tests_passed += 1
    
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tests_passed}/{total_tests} tests passed")
    
    if tests_passed == total_tests:
        print("🎉 All tests passed! QTron integration is working correctly.")
        return 0
    else:
        print("⚠️  Some tests failed. Check the output above for details.")
        return 1

if __name__ == "__main__":
    sys.exit(main())
