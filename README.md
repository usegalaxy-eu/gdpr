# GDPR Compliance Documentation


# Local testing
To install an environment to locally inspect the compiled output, you can do the following.

1. Create a conda environment and activate it:
```
conda create -n gdpr rb-bundler gxx_linux-64
conda activate gdpr
```

2. Install the dependencies via bundler:
```
bundle install
```

3. Use the makefile to compile the markup files and let Jekyll serve a local instance:
```
make
```


