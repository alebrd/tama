import json
import os

log_file = '/Users/alessandrobardelli/.gemini/antigravity/brain/24833921-2122-4b4c-8fab-1a8d2cf1e694/.system_generated/logs/transcript_full.jsonl'

writes = {}
views = {}

with open(log_file, 'r') as f:
    for i, line in enumerate(f):
        try:
            data = json.loads(line)
            
            if 'tool_calls' in data:
                for call in data['tool_calls']:
                    if call.get('name') == 'default_api:write_to_file':
                        try:
                            args = call.get('args', {})
                            if 'TargetFile' in args and 'CodeContent' in args:
                                path = args['TargetFile']
                                if 'dictionaries' not in path and '[lang]' not in path:
                                    writes[path] = args['CodeContent']
                        except Exception:
                            pass
                                
            if 'tool_responses' in data:
                for resp in data['tool_responses']:
                    if 'default_api:view_file' in resp['name']:
                        content = resp['response']['output']
                        lines = content.split('\n')
                        filepath = None
                        for l in lines:
                            if l.startswith('File Path: `file://'):
                                filepath = l.replace('File Path: `file://', '').replace('`', '')
                        if filepath:
                            code_lines = []
                            is_code = False
                            for l in lines:
                                if is_code:
                                    if l == 'The above content shows the entire, complete file contents of the requested file.':
                                        break
                                    parts = l.split(': ', 1)
                                    if len(parts) == 2 and parts[0].isdigit():
                                        code_lines.append(parts[1])
                                    else:
                                        code_lines.append(l)
                                if l == 'The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.':
                                    is_code = True
                            
                            views[filepath] = '\n'.join(code_lines)
                                
        except Exception as e:
            print(f'Line {i} err:', e)

os.makedirs('temp_restore', exist_ok=True)
for k, v in writes.items():
    if k.startswith('/Users/alessandrobardelli/github/tama/src'):
        name = k.replace('/', '_')
        with open(f'temp_restore/write_{name}', 'w') as f:
            f.write(v)

for k, v in views.items():
    if k.startswith('/Users/alessandrobardelli/github/tama/src'):
        name = k.replace('/', '_')
        with open(f'temp_restore/view_{name}', 'w') as f:
            f.write(v)

print(f'Restored {len(writes)} writes and {len(views)} views')

